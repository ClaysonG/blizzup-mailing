import MailingApi from 'mailing_api';

let apiClient = new MailingApi.ApiClient('http://localhost:8081/api');

let instance = new MailingApi.DefaultApi(apiClient);

var callback = function (error, data, response) {
    if (error) {
        console.log(error);
        console.log(error.response)
        // console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
};

// instance.queryTemplates({ filterId: '1,2,3' }, callback);

const opts = {
    sendMailRequest: MailingApi.SendMailRequest.constructFromObject({
        templateId: 1,
        customer_email: "victordavid2506@gmail.com",
        template_args: {
            userName: "blabla",
            email: "bla@email.com",
            link: "google.com",
        },
        title_args: {},
    }),
};

instance.sendMail(opts, callback);