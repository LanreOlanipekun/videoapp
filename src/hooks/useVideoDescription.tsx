const useVideoDescription = () => {
  const formatText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      const parts = line.split(' ');
      return (
        <p key={index} className="mb-2 font-Euclid text-sm dark:text-gray_700">
          {parts.map((part, idx) => {
            if (part.startsWith('http')) {
              return (
                <a
                  key={idx}
                  href={part}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary_blue_300"
                >
                  {part}
                </a>
              );
            } else {
              return `${part} `;
            }
          })}
        </p>
      );
    });
  };

  return {
    formatText,
  };
};

export default useVideoDescription;
