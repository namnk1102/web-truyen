import axios from 'axios'

export default defineSitemapEventHandler(async () => {
    try {
        const { data } = await axios.get('https://api.example/list', {
            params: {
                limit: 70,
                offset: 0
            }
        })

        return data?.data?.map((p: any) => {
            return {
                loc: `/${p?.name}`,
                lastmod: new Date(),
            }
        });
    } catch (e) {
        console.log("error", e);
        return [];
    }
});
