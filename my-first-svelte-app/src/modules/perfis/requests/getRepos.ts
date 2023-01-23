const getRepos = async (name: string) => {
    const res = await fetch(`https://api.github.com/users/${name}/repos?sort=created&per_page=5`);

    return res;
}

export default getRepos