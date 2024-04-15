

request
            .get('users/search', {
                params: {
                    q: debounce,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [debounce]);