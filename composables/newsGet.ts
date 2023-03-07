export default () => {
    const {pending: pendingNews, data: news, error: errorNews} = useLazyFetch(
        `https://www.marche.be/api/actus.php`
    );
    return {
        pendingNews,
        news,
        errorNews
    };
}