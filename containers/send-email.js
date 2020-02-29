import qs from 'qs';
import { Linking } from 'react-native';

// export async function sendEmail(to, subject, body, options = {}) {

// export async function sendEmail(to, subject, body) {
    // const { cc, bcc } = options;
export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }
    console.log(url)
    // check if we can use this link
    // const canOpen = await Linking.canOpenURL(url);

    // if (!canOpen) {
    //     throw new Error('Provided URL can not be handled');
    // }



    // return Linking.openURL(url);
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));
}
