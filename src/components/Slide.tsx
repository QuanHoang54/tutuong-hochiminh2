export default function Slide({ slide }) {
  const renderContent = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="relative h-full min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={slide.content.image}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
            </div>

            <div className="relative z-10 text-center text-white px-8 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.content.mainTitle}
              </h1>
              <p className="text-3xl md:text-4xl mb-6 text-yellow-300 font-bold">
                {slide.content.subTitle}
              </p>
              <p className="text-xl md:text-2xl text-blue-200 italic">
                {slide.content.description}
              </p>
            </div>
          </div>
        );

      case 'section':
        return (
          <div className="relative h-full min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={slide.content.image}
                alt="Section"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
            </div>

            <div className="relative z-10 text-white px-8 max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">
                {slide.content.heading}
              </h2>
              <h3 className="text-2xl md:text-3xl mb-8 text-blue-100">
                {slide.content.subheading}
              </h3>
              {slide.content.intro && (
                <p className="text-xl leading-relaxed mb-6">{slide.content.intro}</p>
              )}
              {slide.content.body && (
                <p className="text-lg leading-relaxed mb-4">{slide.content.body}</p>
              )}
              {slide.content.emphasis && (
                <p className="text-xl font-bold text-yellow-300 italic mt-6">
                  {slide.content.emphasis}
                </p>
              )}
              {slide.content.note && (
                <p className="text-lg mt-6 text-blue-200">{slide.content.note}</p>
              )}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="p-8 md:p-12 min-h-[600px]">
            <div className="max-w-4xl mx-auto">
              {slide.content.image && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={slide.content.image}
                    alt={slide.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {slide.content.heading && (
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  {slide.content.heading}
                </h2>
              )}

              {slide.content.subheading && (
                <h3 className="text-xl md:text-2xl text-blue-700 mb-6">
                  {slide.content.subheading}
                </h3>
              )}

              {slide.content.intro && (
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {slide.content.intro}
                </p>
              )}

              {slide.content.body && (
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {slide.content.body}
                </p>
              )}

              {slide.content.description && (
                <p className="text-xl text-blue-800 font-bold mb-6 italic">
                  {slide.content.description}
                </p>
              )}

              {slide.content.points && (
                <div className="space-y-6 mb-6">
                  {slide.content.points.map((point, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600"
                    >
                      {point.title && (
                        <h4 className="text-xl font-bold text-blue-900 mb-2">
                          {point.icon || '•'} {point.title}
                        </h4>
                      )}
                      {point.text && (
                        <p className="text-gray-700 leading-relaxed">{point.text}</p>
                      )}
                      {point.description && (
                        <p className="text-gray-700 leading-relaxed">{point.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {slide.content.manifestations && (
                <div className="bg-red-50 p-6 rounded-xl mb-6">
                  <ul className="space-y-3">
                    {slide.content.manifestations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-800">
                        <span className="text-red-600 font-bold text-xl">→</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.content.examples && (
                <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl mb-6">
                  <ul className="space-y-2">
                    {slide.content.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-800">
                        <span className="text-yellow-600 font-bold">▸</span>
                        <span className="text-lg">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.content.virtues && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {slide.content.virtues.map((virtue, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg"
                    >
                      <h4 className="text-2xl font-bold mb-3 text-yellow-300">
                        {virtue.title}
                      </h4>
                      <p className="leading-relaxed">{virtue.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {slide.content.qualities && (
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <ul className="space-y-3">
                    {slide.content.qualities.map((quality, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-800">
                        <span className="text-blue-600 font-bold text-xl">✓</span>
                        <span className="text-lg font-medium">{quality}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.content.actions && (
                <div className="bg-green-50 p-6 rounded-xl mb-6">
                  <ul className="space-y-3">
                    {slide.content.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-800">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                        <span className="text-lg">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.content.principles && (
                <div className="space-y-4 mb-6">
                  {slide.content.principles.map((principle, index) => (
                    <div key={index} className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-800 text-lg">{principle}</p>
                    </div>
                  ))}
                </div>
              )}

              {slide.content.sections && slide.content.sections.map((section, sIndex) => (
                <div key={sIndex} className="mb-8">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">{section.title}</h4>
                  {section.intro && (
                    <p className="text-gray-700 mb-4">{section.intro}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2 mb-4">
                      {section.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-3 text-gray-800">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="text-gray-600 italic mt-4">{section.note}</p>
                  )}
                </div>
              ))}

              {slide.content.warning && (
                <p className="text-lg font-bold text-red-600 mb-4">
                  ⚠️ {slide.content.warning}
                </p>
              )}

              {slide.content.consequence && (
                <p className="text-lg font-bold text-gray-800 mb-2">
                  {slide.content.consequence}
                </p>
              )}

              {slide.content.emphasis && (
                <p className="text-xl font-bold text-blue-800 italic mt-4">
                  {slide.content.emphasis}
                </p>
              )}

              {slide.content.conclusion && (
                <p className="text-lg text-gray-800 font-semibold mt-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                  → {slide.content.conclusion}
                </p>
              )}

              {slide.content.opposite && (
                <p className="text-gray-700 italic mt-4">{slide.content.opposite}</p>
              )}

              {slide.content.quote && (
                <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-6 bg-blue-50 rounded-r-xl">
                  <p className="text-2xl italic text-blue-900 font-serif leading-relaxed mb-2">
                    "{slide.content.quote}"
                  </p>
                  {slide.content.quoteAuthor && (
                    <p className="text-lg text-blue-700 font-medium">
                      - {slide.content.quoteAuthor}
                    </p>
                  )}
                </blockquote>
              )}

              {slide.content.characteristics && (
                <div className="space-y-3 mb-6">
                  {slide.content.characteristics.map((char, index) => (
                    <p key={index} className="text-lg text-gray-800 pl-6">
                      {char}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="relative h-full min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={slide.content.image}
                alt="Closing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-900/90"></div>
            </div>

            <div className="relative z-10 text-center text-white px-8 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-300">
                {slide.content.mainText}
              </h2>
              <p className="text-2xl md:text-3xl text-blue-100">
                {slide.content.subText}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="slide-content">{renderContent()}</div>;
}
