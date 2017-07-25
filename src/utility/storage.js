import store from 'store';

export const loadState = () => {
    try {
        return store.get('state') === null ? undefined : store.get('state');
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        store.set('state', {auth: state});
    } catch (err) {

    }
};
