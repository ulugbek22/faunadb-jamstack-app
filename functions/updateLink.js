const axios = require('axios');
require('dotenv').config();
const { UPDATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { _id: id, name, url, description, archived } = JSON.parse(
        event.body
    );
    const variables = { id, name, url, description, archived };
    try {
        const { updateLink: updatedLink } = await sendQuery(
            UPDATE_LINK,
            variables
        );
        return formattedResponse(200, updatedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Somtn went wrong' });
    }
};
