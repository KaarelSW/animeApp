export interface User {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    anime:                Anime[];
}

export interface Anime {
    mal_id:            number;
    title:             string;
    video_url:         string;
    url:               string;
    image_url:         string;
    type:              AnimeType;
    watching_status:   number;
    score:             number;
    watched_episodes:  number;
    total_episodes:    number;
    airing_status:     number;
    season_name:       null;
    season_year:       null;
    has_episode_video: boolean;
    has_promo_video:   boolean;
    has_video:         boolean;
    is_rewatching:     boolean;
    tags:              null | string;
    rating:            Rating;
    start_date:        Date;
    end_date:          Date;
    watch_start_date:  Date | null;
    watch_end_date:    Date | null;
    days:              number | null;
    storage:           null;
    priority:          Priority;
    added_to_list:     boolean;
    studios:           any[];
    licensors:         any[];
    genres:            Demographic[];
    demographics:      Demographic[];
}

export interface Demographic {
    mal_id: number;
    type:   DemographicType;
    name:   Name;
    url:    string;
}

export enum Name {
    Action = "Action",
    Adventure = "Adventure",
    AvantGarde = "Avant Garde",
    Comedy = "Comedy",
    Drama = "Drama",
    Ecchi = "Ecchi",
    Erotica = "Erotica",
    Fantasy = "Fantasy",
    GirlsLove = "Girls Love",
    Horror = "Horror",
    Josei = "Josei",
    Kids = "Kids",
    Mystery = "Mystery",
    Romance = "Romance",
    SciFi = "Sci-Fi",
    Seinen = "Seinen",
    Shoujo = "Shoujo",
    Shounen = "Shounen",
    SliceOfLife = "Slice of Life",
    Sports = "Sports",
    Supernatural = "Supernatural",
    Suspense = "Suspense",
}

export enum DemographicType {
    Anime = "anime",
}

export enum Priority {
    Low = "Low",
}

export enum Rating {
    G = "G",
    PG = "PG",
    PG13 = "PG-13",
    R = "R",
    RatingR = "R+",
}

export enum AnimeType {
    Movie = "Movie",
    Ona = "ONA",
    Ova = "OVA",
    Tv = "TV",
}

export interface GenresChart {
    'Action': number,
    'Adventure': number,
    'Avant Garde': number,
    'BoysLove': number,
    'Comedy': number,
    'Drama': number,
    'Ecchi': number,
    'Erotica': number
    'Fantasy': number,
    'Girls Love': number,
    'Hentai': number;
    'Horror': number,
    'Josei': number,
    'Kids': number,
    'Mystery': number,
    'Romance': number,
    'Seinen': number,
    'Shoujo': number,
    'Shounen': number,
    'Sci-Fi': number,
    'Slice of Life': number,
    'Sports': number,
    'Supernatural': number,
    'Suspense': number
}

export interface YearsObject {
    '2021': number,
    '2020': number,
    '2019': number,
    '2018': number,
    '2016': number,
    '2015': number,
    '2014': number,
    '2013': number,
    '2012': number,
    '2011': number;
    '2010': number,
    '2009': number,
    '2008': number,
    '2007': number,
    '2006': number,
    '2005': number,
    '2004': number,
    '2003': number,
    '2002': number,
    '2001': number,
    '2000': number,
    '1999': number,
    '1998': number,
    '1997': number,
    '1996': number,
    '1995': number,
    '1994': number,
    '1993': number,
    '1992': number,
    '1991': number,
    '1990': number,
    '< 1990': number,
}