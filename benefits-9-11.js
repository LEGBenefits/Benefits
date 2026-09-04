(function () {

  window.companyBenefits =
    window.companyBenefits || {};

  const baseBenefits =
    window.companyBenefits["landau-school"] || [];


  const excludedBenefits = [
    "Qala Tibbi Sığorta",
    "Təhsil haqqına güzəşt",
    "Push30"
  ];


  window.companyBenefits["9-11"] =
    baseBenefits

      .filter(function (benefit) {

        return !excludedBenefits.includes(
          benefit.name
        );

      })

      .map(function (benefit) {

        const newBenefit = {
          ...benefit,

          id: "9-11-" + benefit.id,

          company: "9-11"
        };


        if (
          benefit.name === "Cassa"
        ) {

          newBenefit.usage =
`CassaApp vasitəsilə tələb etdiyiniz zaman vəsait M10 hesabınıza köçürülür.

Hər əməliyyat üçün xidmət komissiyası 2% təşkil edir.`;

        }


        return newBenefit;

      });

})();
