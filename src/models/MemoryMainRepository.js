export class MemoryMainRepository {
  courses = [
    {
      no: 1,
      name: "영진직업전문학교",
      code: "YUNGJIN",
      latitude: 35.87555082502176,
      longitude: 128.6816374505427,
      visited: "N",
      address: "대구 동구 화랑로 525",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MTlfMzgg%2FMDAxNjIxNDA2MzA0OTQ5.5YmFkldaD60A-2SU9ZGr8eFzZuzu8JHigHRrJk-I7VAg.PGzI29z5Foc6DPJCgHHu2k_9f6BQQW3kCfUSRnCl6VEg.JPEG.qhdrn1317%2FSE-880284e8-dcea-4dae-b57f-59ac81c70eda.jpg&type=sc960_832",
    },
    {
      no: 2,
      name: "탐나는 24시 국밥",
      code: "GUKBOB",
      latitude: 35.87583123506328,
      longitude: 128.6817532073904,
      visited: "N",
      address: "대구 동구 동촌로 390",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEwMDlfMTIz%2FMDAxNTcwNjE5OTE2MTMy.gTdmUdaTfa4yGOtYtEiG0psU4NO4XziPGc004gHgn_Yg.KfKFBkC6-fCHKGQ6gwSqVgVGMTdGMFcvUG_Fw4XmISUg.JPEG.vitayona%2F20191001_214051.jpg&type=sc960_832",
    },
    {
      no: 3,
      name: "제주가흑돈애",
      code: "JEJUPIG",
      latitude: 35.87664030121222,
      longitude: 128.68155341448463,
      visited: "Y",
      address: "대구 동구 동촌로 385",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MDJfMTAx%2FMDAxNTA0MzI4MDYyNjQy.G3aUUXWXY88c7XX86SMaH8-LwJH_8TBahZeMKRG23Qog.C8Eb2TXcpqYrCZIP3TqXISiLmcBpNYWDREzKRqSaCGQg.JPEG.usagaja%2F%25B8%25C5%25C0%25E5%25BB%25E7%25C1%25F8_2.jpg&type=sc960_832",
    },
    {
      no: 4,
      name: "놀부보쌈",
      code: "SUBWAY2",
      latitude: 35.87623769570281,
      longitude: 128.68104555230227,
      visited: "Y",
      address: "대구 동구 동촌로 381",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140829_139%2Fsm1020pretty_14092419500614PPtx_JPEG%2FSAM_9238.JPG&type=sc960_832",
    },
  ];
  async findAllCourse() {
    return this.courses;
  }
  async findOne(code) {
    return this.courses.find((e) => e.code === code);
  }
  async updateStatus(code) {
    this.courses = this.courses.map((course) =>
      course.code === code ? { ...course, visited: "Y" } : course
    );
  }
}
