import httpBuildQuery from 'http-build-query';
import API from './api';

export default {
  // getUserInfo(id) {
  //     return API.get(`userinfo/id/${id}`).then(res => (res.data));
  // },
    getRows(url) {
        return API.get(url).then((res) => {
            const result = res.data;
            return result;
        });
    },
    insertData(url, formdata, httpbuild = true) {
        let postdata = httpBuildQuery(formdata);
        if (!httpbuild) {
            postdata = formdata;
        }
        return API.post(url, postdata)
        .then((res) => {
            const result = res.data;
            return result;
        });
    },
    updateData(url, formdata, httpbuild = true) {
        let postdata = httpBuildQuery(formdata);
        if (!httpbuild) {
            postdata = formdata;
        }
        return API.post(url, postdata)
        .then((res) => {
            const result = res.data;
            return result;
        });
    },
};
