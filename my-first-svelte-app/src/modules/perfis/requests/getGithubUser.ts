const getUser = async (inputValue: string) : Promise<Response> => {
    const res = await fetch(`https://api.github.com/users/${inputValue}`);

    return res;
}

export default getUser