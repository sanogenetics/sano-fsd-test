import moment from "moment";

/** sets local storage key and value
 * @param {string} key new local storage key
 * @param {string} value new local storage value
 */
function setLSItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}

/**
 * gets local storage value - returns null if key does not exist
 * @param {object} key local storage key
 */
function getLSItem(key) {
    if (!localStorage.getItem(key)) return null;
    return JSON.parse(localStorage.getItem(key));
}

/** sets local storage key, value and an expiry time (in months)
 * @param {string} key local storage key
 * @param {string} value local storage value
 * @param {string} ttl time to live (in months)
 */
function setLSWithExpiry(key, value, ttl) {
    const futureDate = moment().add(ttl, "month").format("DD MMM YYYY"),
        item = {
            value,
            expires: futureDate,
        };
    localStorage.setItem(key, JSON.stringify(item));
}

/** gets local storage value but returns null if the item was expired
 * @param {string} key local storage key
 */
function getLSWithExpiry(key) {
    const item = getLSItem(key);

    // if the item doesn't exist, return null
    if (!item) return null;

    const todayDate = moment(),
        lsDate = moment(item.expires, "DD MMM YYYY");

    if (item.expires === null) return null;

    if (todayDate >= lsDate) {
        // If the item is expired, delete from storage and return null
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

/**
 * gets service preferences from local storage
 * @param {object} type the type of service object preference to return (intercom, google_tag_manager ...)
 */
function getLSPrivacyServices(service) {
    const services = getLSItem("privacy-services");

    if (!services) return null;

    // return specific service preference
    const service_found = services.find((x) => x.service === service);
    if (!service_found) return null;

    return service_found;
}

export { setLSWithExpiry, getLSWithExpiry, getLSItem, setLSItem, getLSPrivacyServices };
