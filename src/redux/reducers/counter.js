const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INC_COUNT:
      return state + 1;
    case DEC_COUNT:
      return state - 1;
    default:
      return state;
  }
}
