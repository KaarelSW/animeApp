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
