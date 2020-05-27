const getAuthToken = (): string => JSON.parse(sessionStorage.getItem('user') || '{}').token;

const headers = {
  Authorization: getAuthToken(),
};

export const postData = async (url: string, data: object): Promise<object | null> => {
  try {
    const response = await fetch(`/api/${url}`, {
      method: 'POST',
      body: data instanceof FormData ? data : JSON.stringify(data),
      headers,
    });
    return response.json();
  } catch (error) {
    if (error.response.status === 401) {
      sessionStorage.removeItem('user');
      window.location.href = '/';
      return null;
    }

    throw error;
  }
};

export const getData = async (url: string, data: object): Promise<object | null> => {
  try {
    const response = await fetch(`/api/${url}`, {
      method: 'GET',
      headers,
    });
    return response.json();
  } catch (error) {
    if (error.response.status === 401) {
      sessionStorage.removeItem('user');
      window.location.href = '/';
      return null;
    }

    throw error;
  }
};

export const putData = async (url: string, data: object): Promise<object | null> => {
  try {
    const response = await fetch(`/api/${url}`, {
      method: 'PUT',
      body: data instanceof FormData ? data : JSON.stringify(data),
      headers,
    });
    return response.json();
  } catch (error) {
    if (error.response.status === 401) {
      sessionStorage.removeItem('user');
      window.location.href = '/';
      return null;
    }

    throw error;
  }
};
