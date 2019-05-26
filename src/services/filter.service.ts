export function filterMercedesData(mercedesBenzData: any[]): any {
  let updatedMercedesBenzData = mercedesBenzData.map(
    (data: any[]) => data[0].vehicles.records
  );
  const finalData: any[] = [];

  for (let i = 0; i < updatedMercedesBenzData.length; i++) {
    const carArr = updatedMercedesBenzData[i];

    for (let j = 0; j < updatedMercedesBenzData[i].length; j++) {
      const carData = carArr[j];
      finalData.push(carData);
    }
  }

  return finalData;
}
