import { DISHES } from '../dishes';
import { COMMENTS } from '../comments';
import { PROMOTIONS } from '../promotions';
import { LEADERS } from '../leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};