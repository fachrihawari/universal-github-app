import { AnyAction } from 'redux';
import {
  FETCH_COMMIT_BEGIN,
  FETCH_COMMIT_FAILURE,
  FETCH_COMMIT_SUCCESS,
  RESET_COMMIT
} from './constant';
import { transformCommit } from './transform';

export interface ICommit {
  sha: string;
  date: Date;
  message: string;
  authorName: string;
  authorEmail: string;
  authorUsername: string;
  authorAvatarUrl: string;
  authorUrl: string;
}

export interface IState {
  isLoading: boolean;
  error: string | null;
  commits: ICommit[];
  page: number;
  perPage: number;
}

export const initialState: IState = {
  isLoading: false,
  error: null,
  page: 0,
  perPage: 10,
  commits: []
};

export default (state: IState = initialState, action: AnyAction): IState => {
  switch (action.type) {
    case FETCH_COMMIT_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_COMMIT_SUCCESS:
      const cleanCommits = action.payload.commits.map(transformCommit)
      const commits = action.payload.currentPage === 1 ? cleanCommits :  state.commits.concat(cleanCommits)
      return {
        ...state,
        isLoading: false,
        page: action.payload.currentPage,
        commits: commits
      };
    case FETCH_COMMIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case RESET_COMMIT:
      return initialState
    default:
      return state;
  }
};
