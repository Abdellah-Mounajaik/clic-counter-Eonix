import homeContainerReducer from '../redux/reducer';
import { INCREMENT, DECREMENT } from '../redux/constant';

describe('homeContainerReducer', () => {  
    it('Incrémente le compteur', () => {
      expect(homeContainerReducer({ counter: 0 }, { type: INCREMENT })).toEqual({ counter: 1 });
    });
    it('Décrémente le compteur', () => {
      expect(homeContainerReducer({ counter: 1 }, { type: DECREMENT })).toEqual({ counter: 0 });
    });
    it('Ne décrémente pas en dessous de 0', () => {
      expect(homeContainerReducer({ counter: 0 }, { type: DECREMENT })).toEqual({ counter: 0 });
    });
  });