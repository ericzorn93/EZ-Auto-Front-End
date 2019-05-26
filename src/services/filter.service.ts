export function filterMercedesData(mercedesBenzData: any[]): any {
  let updatedMercedesBenzData = mercedesBenzData.map(
    (data: any[]) => data[0].vehicles.records
  );
  const newData: any[] = [];

  for (let i = 0; i < updatedMercedesBenzData.length; i++) {
    const carArr = updatedMercedesBenzData[i];

    for (let j = 0; j < updatedMercedesBenzData[i].length; j++) {
      const carData: any = carArr[j];
      newData.push(carData);
    }
  }

  const finalFilteredData = newData.filter(
    car => car.modelName === "C300 4MATIC Sedan"
  );

  return finalFilteredData;
}
