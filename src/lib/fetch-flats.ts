export const fetchFlats = async () => {
  try {
    const res = await fetch('https://keysmoscow.ru/wp-content/uploads/csvjson.json').then(
      (response) => response.json(),
    );
    return { data: res, ok: true };
  } catch (e) {
    return { ok: false, error: e };
  }
};
