(function () {

  window.companyBenefits =
    window.companyBenefits || {};

  const baseBenefits =
    window.companyBenefits["landau-school"] || [];


  const excludedBenefits = [
    "Təhsil haqqına güzəşt",
    "Cassa",
    "Maliyyə dəstəyi",
    "3 günlük icazə"
  ];


  window.companyBenefits["landau-academy"] =
    baseBenefits

      .filter(function (benefit) {

        return !excludedBenefits.includes(
          benefit.name
        );

      })

      .map(function (benefit) {

        return {
          ...benefit,

          id:
            "landau-academy-" +
            benefit.id,

          company:
            "landau-academy"
        };

      });

})();
