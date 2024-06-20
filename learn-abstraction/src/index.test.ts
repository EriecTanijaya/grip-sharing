import { User } from ".";
import { IndonesianGreeter } from "./greeter/IndonesianGreeter";

let user: User;

describe("User", () => {
  beforeEach(() => {
    user = new User("hehe");
  });

  test("should able to create user", () => {
    const user = new User("hehe");

    expect(user).toBeInstanceOf(User);
  });

  test("should have name", () => {
    const name = "Lala";

    const user = new User(name);

    expect(user.name).toBe(name);
  });

  test("should able to greet", () => {
    const greeting = user.greet({ name: "" });

    expect(greeting).toBeDefined();
  });

  test("should able to greet by name", () => {
    const calledName = "Fofo";

    const greeting = user.greet({ name: calledName });

    expect(greeting).toContain(calledName);
  });

  test("should able to greet by male gender", () => {
    const greeting = user.greet({ name: "fofo", gender: "male" });

    expect(greeting).toContain("Mr");
  });

  test("should able to greet by female gender", () => {
    const greeting = user.greet({ name: "fofo", gender: "female" });

    expect(greeting).toContain("Ms");
  });

  test("should able to greet good morning when current time is morning", () => {
    const greeting = user.greet({
      name: "fofo",
      gender: "male",
      period: "morning"
    });

    expect(greeting).toContain(`morning`);
  });

  test("should able to greet good afternoon when current time is afternoon", () => {
    const greeting = user.greet({
      name: "fofo",
      gender: "female",
      period: "afternoon"
    });

    expect(greeting).toContain(`afternoon`);
  });

  test("should able to greet good evening when current time is evening", () => {
    const greeting = user.greet({
      name: "fofo",
      gender: "female",
      period: "evening"
    });

    expect(greeting).toContain(`evening`);
  });

  test("should able to greet good night when current time is night", () => {
    const greeting = user.greet({
      name: "fofo",
      gender: "female",
      period: "night"
    });

    expect(greeting).toContain(`night`);
  });

  test("should only call by name when the gender is male and female", () => {
    const greeting = user.greet({
      name: "fofo",
      gender: "bigender",
      period: "night"
    });

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should only call by name when the gender is not male and not female", () => {
    const greeting = user.greet({
      name: "fofo",
      period: "morning"
    });

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should able to greet by indonesian language", () => {
    const greeting = user.greet({
      name: "Fifi",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Halo`);
  });

  test("should greet by english language by default", () => {
    const greeting = user.greet({ name: "" });

    expect(greeting).toContain("wassup");
  });

  test("should able to greet male with indonesian language", () => {
    // const greeting = user.greet('Fifi', true, false, false, false, false, false, 'indo');
    const greeting = user.greet({
      name: "Fifi",
      gender: "male",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Pak`);
  });

  test("should able to greet female with indonesian language", () => {
    const greeting = user.greet({
      name: "Fifi",
      gender: "female",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Bu`);
  });

  test("should able to greet morning with indonesian language", () => {
    const greeting = user.greet({
      name: "Fifi",
      gender: "female",
      period: "morning",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Selamat pagi`);
  });

  test("should able to greet morning to female in indonesian language", () => {
    const femaleName = "Fifi";

    const greeting = user.greet({
      name: femaleName,
      gender: "female",
      period: "morning",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Selamat pagi Bu ${femaleName}`);
  });

  test("should able to greet morning to male in indonesian language", () => {
    const maleName = "Budi";

    const greeting = user.greet({
      name: maleName,
      gender: "male",
      period: "morning",
      greeter: new IndonesianGreeter()
    });

    expect(greeting).toContain(`Selamat pagi Pak ${maleName}`);
  });

  test("should able to greet morning to female in english language", () => {
    const femaleName = "Fifi";

    const greeting = user.greet({
      name: femaleName,
      gender: "female",
      period: "morning"
    });

    expect(greeting).toContain(`Good morning Ms ${femaleName}`);
  });

  test("Given other user is male and female, When greet morning in english language, Then should greet without title", () => {
    const otherUser = new User("Heho");

    const greeting = user.greet({
      name: otherUser.name,
      gender: "bigender",
      period: "morning"
    });

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
    expect(greeting).toContain(`Good morning ${otherUser.name}`);
  });

  test("should able to add friend with other user", () => {
    const otherUser = new User("Heho");

    user.addFriend(otherUser);

    expect(user.friends).toContainEqual<User>(otherUser);
  });
});
