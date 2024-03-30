import { helloWorld } from './hello-world';

describe('helloWorld', () => {
  it('returns the string "hello, world!"', () => {
    const expected = 'hello, world!';
    const actual = helloWorld();

    expect(actual).toStrictEqual(expected);
  });
});
