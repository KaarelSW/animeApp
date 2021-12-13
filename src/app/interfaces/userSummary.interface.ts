export interface UserSummary {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    user_id:              number;
    username:             string;
    url:                  string;
    image_url:            string;
    last_online:          Date;
    gender:               null;
    birthday:             null;
    location:             null;
    joined:               Date;
    anime_stats:          AnimeStats;
    manga_stats:          MangaStats;
    favorites:            Favorites;
    about:                null;
}

export interface AnimeStats {
    days_watched:     number;
    mean_score:       number;
    watching:         number;
    completed:        number;
    on_hold:          number;
    dropped:          number;
    plan_to_watch:    number;
    total_entries:    number;
    rewatched:        number;
    episodes_watched: number;
}

export interface Favorites {
    anime:      any[];
    manga:      any[];
    characters: any[];
    people:     any[];
}

export interface MangaStats {
    days_read:     number;
    mean_score:    number;
    reading:       number;
    completed:     number;
    on_hold:       number;
    dropped:       number;
    plan_to_read:  number;
    total_entries: number;
    reread:        number;
    chapters_read: number;
    volumes_read:  number;
}

export interface UserFriends {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    friends:              Friend[];
}

export interface Friend {
    url:           string;
    username:      string;
    image_url:     string;
    last_online:   Date;
    friends_since: Date;
}
