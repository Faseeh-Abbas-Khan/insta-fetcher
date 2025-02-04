
/** Instagram Highlight query */
export const highlight_ids_query = (userId: string) => {
    return {
        'query_hash': 'e74d51c10ecc0fe6250a295b9bb9db74',
        'variables': JSON.stringify({
            "user_id": userId,
            "include_chaining": false,
            "include_reel": false,
            "include_suggested_users": false,
            "include_logged_out_extras": true,
            "include_highlight_reels": true,
            "include_related_profiles": true
        })
    }
}

export const highlight_media_query = (ids: string) => {
    return {
        'query_hash': '0a85e6ea60a4c99edc58ab2f3d17cfdf',
        'variables': JSON.stringify({
            "reel_ids":[],
            "tag_names":[],
            "location_ids":[],
            "highlight_reel_ids":[ids],
            "precomposed_overlay":false,
            "show_story_viewer_list":true,
            "story_viewer_fetch_count":50,
            "story_viewer_cursor":"",
            "stories_video_dash_manifest":false
        })
    }
}