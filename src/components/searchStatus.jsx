import React from "react";

const SearchStatus = ({ length }) => {
  const stylePhrase = {
    fontFamily: "sans-serif",
    fontWeight: 500,
  };

  // Вывод правильного склонения фразы
  const renderPhrase = (length) => {
    const phrase = [2, 3, 4].includes(length) ? "человека" : "человек";
    return phrase;
  };

  // Вывод фразы в заголовке
  const titlePhrase = (length) => {
    const res =
      length === 0
        ? "Никто с тобой не тусанет сегодня"
        : length + " " + renderPhrase(length) + " тусанет с тобой сегодня";
    return res;
  };

  return (
    <div
      className={"badge m-1 p-1 fs-5 bg-" + (length > 0 ? "primary" : "danger")}
      style={stylePhrase}
    >
      {titlePhrase(length)}
    </div>
  );
};

export default SearchStatus;
