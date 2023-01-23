export default interface IUserGithub {
    
        login: string;
        id: number;
        node_id: string;
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean,
        name: string | null,
        company: null | string,
        blog: string,
        location: string | null,
        email: null | string,
        hireable: null | boolean,
        bio: string,
        twitter_username: string | null,
        public_repos: number,
        public_gists: number,
        followers: number,
        following: number,
        created_at: Date,
        updated_at: Date
      
}