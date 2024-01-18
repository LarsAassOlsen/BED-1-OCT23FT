$.ajax ({
    url: 'https://github.com/LarsAassOlsen/SagaMemo',
    processData: false,
    success: function(response) {
        console.log(response)
        const serialized = JSON.stringify(response);
        console.log(serialized);
        const deserialized = JSON.parse(serialized);
        console.log(deserialized);
    }
})