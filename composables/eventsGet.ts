export default () => {
    const {pending: pendingEvents, data: events, error: errorEvents} = useLazyFetch(
        `https://www.marche.be/api/events.php`
    );
    return {
        pendingEvents,
        events,
        errorEvents
    };
}