export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-project-492bd-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'post',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.data.message || 'Failed to fecth!');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },

  async loadRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://vue-http-project-492bd-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.data.message || 'Failed to fecth!');
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId,
        userEmail: responseData[key].email,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
