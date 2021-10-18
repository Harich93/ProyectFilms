import { Action, iActiveSerieRState } from "../Types/interface/interfaces";
import { types } from '../Types/types';

 const initialState:iActiveSerieRState = {
    ActiveSerieCast      : [],
    ActiveSerieRecommend : [],
    ActiveSerieSimilar   : [],
    ActiveSerieVideos    : [],
 }
 
 export const activeSerieReducer = ( state = initialState, action:Action ) => {
   
   switch (action.type) {
      case types.activeSetCastSerie:
         return {
              ...state,
              ActiveSerieCast: action.payload
         }

      case types.activeSetSerie:
          return {
              ...state,
              ActiveSerie: action.payload
          }
      
      case types.activeSetSimilarSerie:
          return{
              ...state,
              ActiveSerieSimilar: action.payload
          }

      case types.activeAddSimilarSerie:
          return {
              ...state,
              ActiveSerieSimilar: [ ...state.ActiveSerieSimilar, ...action.payload ]
          }

      case types.activeSetRecommendSerie:
          return{
              ...state,
              ActiveSerieRecommend: action.payload
          }

      case types.activeAddRecommendSerie:
          return {
              ...state,
              ActiveSerieRecommend: [ ...state.ActiveSerieRecommend, ...action.payload ]
          }

      case types.activeSetDetailsSerie:
          return {
              ...state,
              ActiveSerieDetails: action.payload
          }

      case types.activeSetVideosSerie:
          return {
              ...state,
              ActiveSerieVideos: action.payload
          }

      case types.activeSetImagesSerie:
          return {
              ...state,
              ActiveSerieImages: action.payload
          }

      case types.activeSetSeasonSerie:
          return {
              ...state,
              ActiveSeason: action.payload
          }

      case types.activeSetWatchProvidersSerie:
          return {
              ...state,
              ActiveWPSerie: action.payload
          } 

      
      default: return state;
  }
 }