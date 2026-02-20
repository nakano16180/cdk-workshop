exports.handler = async (event) => {
  console.log('EventBridge event received:', JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from EventBridge sample Lambda!',
    }),
  };
};
