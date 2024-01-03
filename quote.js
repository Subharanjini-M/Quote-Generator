    function getQuotes(tagName) {
        fetch(`https://api.quotable.io/quotes?tags=${tagName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: Unable to retrieve quotes.`);
                }
                return response.json();
            })
            .then(data => {
                const quoteContainer = document.getElementById('quoteContainer');
                quoteContainer.innerHTML = ''; // Clear previous quotes
                if (data.results.length > 0) {
                    data.results.forEach(quote => {
                        quoteContainer.innerHTML += `<p>${quote.content}</p><p>- ${quote.author}</p><hr>`;
                    });
                } else {
                    quoteContainer.innerHTML = `<p>No quotes found for tag: ${tagName}</p>`;
                }
            })
            .catch(error => {
                console.error(error.message);
            });
    }