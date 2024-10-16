export const getPosts = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${import.meta.env.VITE_BASE_PATH}/posts`, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } catch (error) {
          reject(new Error("Erro ao processar os dados"));
        }
      } else {
        reject(new Error(`Erro na requisição: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Erro de rede"));
    };

    xhr.send();
  });
};

export const getCommets = async (id) => {
  let idAux = "";

  if (id) {
    idAux += `postId=${id}`;
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_PATH}/comments?${idAux}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erro ao carregar dados");
  }
};
