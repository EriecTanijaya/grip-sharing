import { User } from ".";
import { Greet } from "./greet";
import LanguageModule from "./language";

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
    const greeting = user.greet();

    expect(greeting).toBeDefined();
  });

  test("should able to greet by name", () => {
    const calledName = "Fofo";

    const greeting = user.greet(calledName);

    expect(greeting).toContain(calledName);
  });

  test("should able to greet by male gender", () => {

    const greet = new Greet({ period: "morning", gender: "male" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain("Mr");
  });

  test("should able to greet by female gender", () => {
    const greet = new Greet({ period: "morning", gender: "female" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain("Ms");
  });

  test("should able to greet good morning when current time is morning", () => {
    const greet = new Greet({ period: "morning", gender: "male" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain(`morning`);
  });

  test("should able to greet good afternoon when current time is afternoon", () => {
    const greet = new Greet({ period: "afternoon", gender: "male" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain(`afternoon`);
  });

  test("should able to greet good evening when current time is evening", () => {
    const greet = new Greet({ period: "evening", gender: "male" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain(`evening`);
  });

  test("should able to greet good night when current time is night", () => {
    const greet = new Greet({ period: "night", gender: "male" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).toContain(`night`);
  });

  test("should only call by name when the gender is male and female", () => {
    const greet = new Greet({ gender: "non", period: "night" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should only call by name when the gender is not male and not female", () => {
    const greet = new Greet({ period: "night", gender: "non" });

    const greeting = user.greet("fofo", greet);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should able to greet by indonesian language", () => {
    const language = new LanguageModule("id")

    const greet = new Greet({ period: "night", gender: "male", inLanguage: language });

    const greeting = user.greet("fifi", greet);

    expect(greeting).toContain(`Halo`);
  });

  test("should greet by english language by default", () => {
    const greeting = user.greet();

    expect(greeting).toContain("wassup");
  });

  test("should able to greet male with indonesian language", () => {
    const greet = new Greet({ period: "night", gender: "male", inLanguage: new LanguageModule("id") }); //Indo

    const greeting = user.greet("fofo", greet);


    expect(greeting).toContain(`Pak`);
  });

  test("should able to greet female with indonesian language", () => {
    const greet = new Greet({ period: "night", gender: "female", inLanguage: new LanguageModule("id") }); //Indo

    const greeting = user.greet("fifi", greet);


    expect(greeting).toContain(`Bu`);
  });

  test("should able to greet morning with indonesian language", () => {

    const greet = new Greet({ period: "morning", gender: "female", inLanguage: new LanguageModule("id") }); //Indo

    const greeting = user.greet("fifi", greet);

    expect(greeting).toContain(`Selamat pagi`);
  });

  test("should able to greet morning to female in indonesian language", () => {
    const femaleName = "Fifi";
    const greet = new Greet({ gender: "female", period: "morning", inLanguage: new LanguageModule("id") });

    const greeting = user.greet(femaleName, greet);

    expect(greeting).toContain(`Selamat pagi Bu ${femaleName}`);
  });

  test("should able to greet morning to male in indonesian language", () => {
    const maleName = "Budi";

    const greet = new Greet({ period: "morning", gender: "male", inLanguage: new LanguageModule("id") });

    const greeting = user.greet(maleName, greet);

    expect(greeting).toContain(`Selamat pagi Pak ${maleName}`);
  });

  test("should able to greet morning to female in english language", () => {
    const femaleName = "Fifi";

    const greet = new Greet({ period: "morning", gender: "female" }); //Indo

    const greeting = user.greet(femaleName, greet);

    expect(greeting).toContain(`Good morning Ms ${femaleName}`);
  });

  test("Given other user is male and female, When greet morning in english language, Then should greet without title", () => {
    const otherUser = new User("Heho");

    const greet = new Greet({ period: "morning", gender: "non" }); //Indo

    const greeting = user.greet(otherUser.name, greet);

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
