import { User } from '.';
import { UserGender } from './genderEnum';
import { GreetTime } from './greetEnum';
import { Language } from './languageEnum';

let user: User;

describe('User', () => {
  beforeEach(() => {
    user = new User('hehe');
  });

  test('should able to create user', () => {
    const user = new User('hehe');

    expect(user).toBeInstanceOf(User);
  });

  test('should have name', () => {
    const name = 'Lala';

    const user = new User(name);

    expect(user.name).toBe(name);
  });

  test('should able to greet', () => {
    const greeting = user.greet();

    expect(greeting).toBeDefined();
  });

  test('should able to greet by name', () => {
    const fofoUser = new User('fofo');

    const greeting = user.greet(fofoUser);

    expect(greeting).toContain(fofoUser.name);
  });

  test('should able to greet by male gender', () => {
    const fofoUser = new User('fofo', UserGender.MALE);
    const greeting = user.greet(fofoUser);

    expect(greeting).toContain('Mr');
  });

  test('should able to greet by female gender', () => {
    const fofoUser = new User('fofo', UserGender.FEMALE);
    const greeting = user.greet(fofoUser);

    expect(greeting).toContain('Ms');
  });

  test('should able to greet good morning when current time is morning', () => {
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser, GreetTime.MORNING);

    expect(greeting).toContain(`morning`);
  });

  test('should able to greet good afternoon when current time is afternoon', () => {
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser, GreetTime.AFTERNOON);

    expect(greeting).toContain(`afternoon`);
  });

  test('should able to greet good evening when current time is evening', () => {
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser, GreetTime.EVENING);

    expect(greeting).toContain(`evening`);
  });

  test('should able to greet good night when current time is night', () => {
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser, GreetTime.NIGHT);

    expect(greeting).toContain(`night`);
  });

  test('should only call by name when the gender is male and female', () => { // WHY CAN A USER HAS 2 GEMDER?
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test('should only call by name when the gender is not male and not female', () => {
    const fofoUser = new User('fofo');
    const greeting = user.greet(fofoUser);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
  });

  test('should able to greet by indonesian language', () => {
    const greeting = user.greet(null, null, Language.INDONESIAN)

    expect(greeting).toContain(`Halo hehe`);
  });

  test('should greet by english language by default', () => {
    const greeting = user.greet(null, null, Language.ENGLISH);

    expect(greeting).toContain('wassup');
  });

  test('should able to greet male with indonesian language', () => {
    const fifiUser = new User('Fifi', UserGender.MALE);
    const greeting = user.greet(fifiUser,null, Language.INDONESIAN);

    expect(greeting).toContain(`Pak`);
  });

  test('should able to greet female with indonesian language', () => {
    const fifiUser = new User('Fifi', UserGender.FEMALE);
    const greeting = user.greet(fifiUser,null, Language.INDONESIAN);

    expect(greeting).toContain(`Bu`);
  });

  test('should able to greet morning with indonesian language', () => {
    const fifiUser = new User('Fifi', UserGender.FEMALE);
    const greeting = user.greet(fifiUser, GreetTime.MORNING, Language.INDONESIAN);

    expect(greeting).toContain(`Selamat pagi`);
  });

  test('should able to greet morning to female in indonesian language', () => {
    const fifiUser = new User('Fifi', UserGender.FEMALE);

    const greeting = user.greet(fifiUser, GreetTime.MORNING, Language.INDONESIAN);

    expect(greeting).toContain(`Selamat pagi Bu ${fifiUser.name}`);
  });

  test('should able to greet morning to male in indonesian language', () => {
    const budiUser = new User('Budi', UserGender.MALE);

    const greeting = user.greet(budiUser, GreetTime.MORNING, Language.INDONESIAN);

    expect(greeting).toContain(`Selamat pagi Pak ${budiUser.name}`);
  });

  test('should able to greet morning to female in english language', () => {
    const fifiUser = new User('Fifi', UserGender.FEMALE);

    const greeting = user.greet(fifiUser, GreetTime.MORNING, Language.ENGLISH);

    expect(greeting).toContain(`Good morning Ms ${fifiUser.name}`);
  });

  test('Given other user is male and female, When greet morning in english language, Then should greet without title', () => {
    const otherUser = new User('Heho');

    const greeting = user.greet(otherUser, GreetTime.MORNING, Language.ENGLISH);

    expect(greeting).not.toContain(`Mr`);
    expect(greeting).not.toContain(`Ms`);
    expect(greeting).toContain(`Good morning ${otherUser.name}`);
  });

  test('should able to add friend with other user', () => {
    const otherUser = new User('Heho');

    user.addFriend(otherUser);

    expect(user.friends).toContainEqual<User>(otherUser);
  });
});
