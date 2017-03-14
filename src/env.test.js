describe('environment', () => {
  it('asyn await', async () => {
    const result = await Promise.resolve('hello');
    expect(result).toEqual('hello');
  });

  it('esnext', () => {
    const bar = { b: 2, c: 3 };
    const foo = { a: 1, ...bar };
    const { a, ...z } = foo;
    expect(a).toEqual(1);
    expect(z).toEqual(bar);
  });
});

