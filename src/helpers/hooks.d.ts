import { AnyAction, Dispatch } from 'redux';

declare function useDispatchAction<TInput, A>(action: (...args: TInput) => A) : (...args: TInput) => Dispatch<A>;