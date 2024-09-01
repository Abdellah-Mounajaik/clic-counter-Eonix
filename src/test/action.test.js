import { incrementAction, DecrementAction } from '../redux/action';
import { INCREMENT, DECREMENT } from '../redux/constant';

describe('Actions', () => {
  it('Devrait générer une action pour incrémenter le compteur', () => {
    expect(incrementAction()).toEqual({ type: INCREMENT });
  });
  it('Devrait générer une action pour décrémenter le compteur', () => {
    expect(DecrementAction()).toEqual({ type: DECREMENT });
  });
});