import { User } from ".";
import { Gender } from "./enum/gender";
import { Language } from "./enum/language";
import { PeriodOfTime } from "./enum/time";
import { GreetParam } from "./greeter";

let user: User;
let maleFriend: User;
let femaleFriend: User;
let bigenderFriend: User;
let nonBinaryFriend: User;

describe("User", () => {
  beforeEach(() => {
    user = new User("hehe");

    maleFriend = new User("fofo");
    maleFriend.setGender(Gender.Male);

    femaleFriend = new User("fifi");
    femaleFriend.setGender(Gender.Female);

    bigenderFriend = new User("fefe");
    bigenderFriend.setGender(Gender.Bigender);

    nonBinaryFriend = new User("fufu");
    nonBinaryFriend.setGender(Gender.NonBinary);
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
    const greeting = user.greet(maleFriend);

    const calledName = maleFriend.name;

    expect(greeting).toContain(calledName);
  });

  test("should able to greet by male gender", () => {
    const greeting = user.greet(maleFriend);

    expect(greeting).toContain("Mr");
  });

  test("should able to greet by female gender", () => {
    const greeting = user.greet(femaleFriend);

    expect(greeting).toContain("Ms");
  });

  test("should able to greet good morning when current time is morning", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    expect(greeting).toContain(`morning`);
  });

  test("should able to greet good afternoon when current time is afternoon", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Afternoon,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    expect(greeting).toContain(`afternoon`);
  });

  test("should able to greet good evening when current time is evening", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Evening,
    };

    const greeting = user.greet(maleFriend, greetParam);

    expect(greeting).toContain(`evening`);
  });

  test("should able to greet good night when current time is night", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Night,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    expect(greeting).toContain(`night`);
  });

  test("should only call by name when the gender is male and female", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Night,
    };

    const greeting = user.greet(bigenderFriend, greetParam);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should only call by name when the gender is not male and not female", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Night,
    };

    const greeting = user.greet(nonBinaryFriend, greetParam);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test("should able to greet by indonesian language", () => {
    const greetParam: GreetParam = {
      lang: Language.Indonesian,
    };

    const greeting = user.greet(nonBinaryFriend, greetParam);

    expect(greeting).toContain(`Halo`);
  });

  test("should greet by english language by default", () => {
    const greeting = user.greet();

    expect(greeting).toContain("wassup");
  });

  test("should able to greet male with indonesian language", () => {
    const greetParam: GreetParam = {
      lang: Language.Indonesian,
    };

    const greeting = user.greet(maleFriend, greetParam);

    expect(greeting).toContain(`Pak`);
  });

  test("should able to greet female with indonesian language", () => {
    const greetParam: GreetParam = {
      lang: Language.Indonesian,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    expect(greeting).toContain(`Bu`);
  });

  test("should able to greet morning with indonesian language", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
      lang: Language.Indonesian,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    expect(greeting).toContain(`Selamat pagi`);
  });

  test("should able to greet morning to female in indonesian language", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
      lang: Language.Indonesian,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    const femaleName = femaleFriend.name;

    expect(greeting).toContain(`Selamat pagi Bu ${femaleName}`);
  });

  test("should able to greet morning to male in indonesian language", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
      lang: Language.Indonesian,
    };

    const greeting = user.greet(maleFriend, greetParam);

    const maleName = maleFriend.name;

    expect(greeting).toContain(`Selamat pagi Pak ${maleName}`);
  });

  test("should able to greet morning to female in english language", () => {
    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
    };

    const greeting = user.greet(femaleFriend, greetParam);

    const femaleName = femaleFriend.name;

    expect(greeting).toContain(`Good morning Ms ${femaleName}`);
  });

  test("Given other user is male and female, When greet morning in english language, Then should greet without title", () => {
    const otherUser = new User("Heho");
    otherUser.setGender(Gender.Bigender);

    const greetParam: GreetParam = {
      periodOfTime: PeriodOfTime.Morning,
    };

    const greeting = user.greet(otherUser, greetParam);

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
