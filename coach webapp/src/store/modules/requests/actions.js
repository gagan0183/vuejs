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

    context.commit('addRequest', newRequest);
  },
};
