import { INCREMENT, DECREMENT } from '../redux/constant';

describe('Constant', () => {
  it('Vérifie que la constante INCREMENT est correcte', () => {
    expect(INCREMENT).toBe('HomeContainer/increment');
  });
  it('Vérifie que la constante DECREMENT est correcte', () => {
    expect(DECREMENT).toBe('HomeContainer/decrement');
  });
});