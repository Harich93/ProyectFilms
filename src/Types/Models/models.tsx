
// Movies
export interface MovieModel {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface CreditsModel {
    id:   number;
    cast: Cast[];
    crew: any[];
}

export interface Movie {
    adult             : boolean;
    backdrop_path     : string;
    genre_ids         : number[];
    id                : number;
    original_language : string;
    original_title    : string;
    overview          : string;
    popularity        : number;
    poster_path       : string;
    release_date      : string;
    title             : string;
    video             : boolean;
    vote_average      : number;
    vote_count        : number;
}
export interface DetailsModel {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}

export interface Genre {
    id:   number;
    name: string;
}

interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}



// Series

export interface SeriesModel {
    page:          number;
    results:       Serie[];
    total_pages:   number;
    total_results: number;
}

export interface Serie {
    backdrop_path:     null | string;
    first_air_date:    string;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}

export interface DetailsSerieModel {
    backdrop_path:        string;
    created_by:           CreatedBy[];
    episode_run_time:     number[];
    first_air_date:       Date;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        Date;
    last_episode_to_air:  LastEpisodeToAir;
    name:                 string;
    next_episode_to_air:  null;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: any[];
    production_countries: any[];
    seasons:              Season[];
    spoken_languages:     SpokenLanguage[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export interface CreatedBy {
    id:           number;
    credit_id:    string;
    name:         string;
    profile_path: null;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date:        Date;
    episode_number:  number;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    season_number:   number;
    still_path:      null;
    vote_average:    number;
    vote_count:      number;
}

export interface Network {
    name:           string;
    id:             number;
    logo_path:      string;
    origin_country: string;
}

export interface Season {
    _id:           string;
    air_date:      Date;
    episode_count: number;
    episodes?:     Episode[];
    name:          string;
    overview:      string;
    id:            number;
    poster_path:   string;
    season_number: number;
}

export interface Episode {
    air_date:        Date;
    episode_number:  number;
    crew:            Crew[];
    guest_stars:     Crew[];
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    season_number:   number;
    still_path:      null;
    vote_average:    number;
    vote_count:      number;
}

export interface Crew {
    department?:          Department;
    job?:                 Job;
    credit_id:            string;
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    character?:           string;
    order?:               number;
}

export enum Department {
    Acting = "Acting",
    Directing = "Directing",
    Editing = "Editing",
    Writing = "Writing",
}

export enum Job {
    Director = "Director",
    Editor = "Editor",
    Writer = "Writer",
}

// Images

export interface ImagesModel {
    backdrops: Backdrop[];
    id:        number;
    logos:     Backdrop[];
    posters:   Backdrop[];
}

export interface Backdrop {
    aspect_ratio: number;
    height:       number;
    iso_639_1:    null | string;
    file_path:    string;
    vote_average: number;
    vote_count:   number;
    width:        number;
}

// Watch providers

export interface WatchProviders {
    id:      number;
    results: Platforms
;
}

export interface Platforms {
    AR: Ar;
    AT: At;
    AU: At;
    BE: Ar;
    BG: Ar;
    BR: At;
    CA: At;
    CH: Ar;
    CL: Ar;
    CO: Ar;
    CZ: Ar;
    DE: At;
    DK: At;
    EC: Ar;
    EE: Ar;
    ES: Ar;
    FI: At;
    FR: At;
    GB: At;
    GR: Ar;
    HU: Ar;
    ID: Ar;
    IE: At;
    IN: Ar;
    IT: Ar;
    JP: At;
    KR: Ar;
    LT: Ar;
    LV: Ar;
    MX: At;
    MY: Ar;
    NL: Ar;
    NO: At;
    NZ: At;
    PE: Ar;
    PL: At;
    PT: Ar;
    RO: Ar;
    RU: Ar;
    SE: At;
    SG: Ar;
    TH: Ar;
    TR: Ar;
    US: At;
    VE: Ar;
    ZA: Ar;
}

export interface Ar {
    link:     string;
    flatrate: Flatrate[];
}

export interface Flatrate {
    display_priority: number;
    logo_path:        string;
    provider_id:      number;
    provider_name:    string;
}

export interface At {
    link:     string;
    flatrate: Flatrate[];
    buy?:     Flatrate[];
    free?:    Flatrate[];
    rent?:    Flatrate[];
    ads?:     Flatrate[];
}

