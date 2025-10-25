import { MovieCategory } from './types';

// ข้อมูลหนังและหมวดหมู่ทั้งหมดถูกแปลเป็นภาษาไทย
// และเพิ่มข้อมูล `streamingOn` เพื่อชี้ไปยังผู้ให้บริการที่ถูกลิขสิทธิ์
// เพิ่มข้อมูล `dateAdded` เพื่อใช้กับฟีเจอร์ปฏิทินอัปเดต

export const MOVIE_CATEGORIES: MovieCategory[] = [
  {
    id: 'trending',
    title: 'กำลังฮิต',
    movies: [
      {
        id: '1',
        title: 'ขอบฟ้าไซเบอร์เนติก',
        description: 'ในอนาคตที่ชุ่มโชกด้วยแสงนีออน แฮกเกอร์ผู้โดดเดี่ยวได้เปิดโปงแผนการสมคบคิดที่คุกคามจะทำลายโครงสร้างของความเป็นจริง',
        posterUrl: 'https://picsum.photos/id/10/500/750',
        backdropUrl: 'https://picsum.photos/id/12/1280/720',
        rating: 4.8,
        year: 2024,
        genres: ['ไซไฟ', 'แอ็คชั่น', 'ระทึกขวัญ'],
        dateAdded: '2024-07-28',
        streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
        ],
      },
      {
        id: '2',
        title: 'เสียงกระซิบแห่งพงไพร',
        description: 'วิญญาณโบราณแห่งป่าไม้ตื่นขึ้นมาเพื่อปกป้องบ้านของตนจากกองกำลังอุตสาหกรรมที่รุกราน และได้พบกับพันธมิตรที่ไม่คาดคิดคือนักพฤกษศาสตร์สาว',
        posterUrl: 'https://picsum.photos/id/22/500/750',
        backdropUrl: 'https://picsum.photos/id/25/1280/720',
        rating: 4.5,
        year: 2023,
        genres: ['แฟนตาซี', 'ผจญภัย', 'ดราม่า'],
        dateAdded: '2024-07-27',
        streamingOn: [
          { name: 'Disney+ Hotstar', url: 'https://www.hotstar.com/th' },
        ],
      },
      {
        id: '3',
        title: 'โคตรคนนายอำเภอ',
        description: 'นายอำเภอที่เกษียณแล้วถูกบังคับให้ต้องกลับมาติดตราอีกครั้ง เมื่อแก๊งคนโหดเข้ามายึดครองเมืองทะเลทรายที่เงียบสงบของเขา',
        posterUrl: 'https://picsum.photos/id/42/500/750',
        backdropUrl: 'https://picsum.photos/id/48/1280/720',
        rating: 4.2,
        year: 2024,
        genres: ['ตะวันตก', 'แอ็คชั่น'],
        dateAdded: '2024-07-26',
        streamingOn: [
          { name: 'Amazon Prime Video', url: 'https://www.primevideo.com/' },
        ],
      },
      {
        id: '4',
        title: 'มหาสมุทรสุดลึก',
        description: 'ทีมสำรวจใต้ทะเลลึกค้นพบสิ่งมีชีวิตสายพันธุ์ใหม่ที่มีสติปัญญา แต่การค้นพบของพวกเขาอาจหมายถึงจุดจบของมวลมนุษยชาติ',
        posterUrl: 'https://picsum.photos/id/52/500/750',
        backdropUrl: 'https://picsum.photos/id/102/1280/720',
        rating: 4.6,
        year: 2022,
        genres: ['ไซไฟ', 'สยองขวัญ'],
        dateAdded: '2024-07-25',
        streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
        ],
      },
      {
        id: '5',
        title: 'นครแห่งเพลงบลูส์',
        description: 'นักดนตรีตกอับในนิวออร์ลีนส์ยุค 1950 ได้รับโอกาสสุดท้ายที่จะมีชื่อเสียง แต่ต้องแลกมาด้วยราคาที่แสนแพง',
        posterUrl: 'https://picsum.photos/id/65/500/750',
        backdropUrl: 'https://picsum.photos/id/76/1280/720',
        rating: 4.9,
        year: 2023,
        genres: ['ดราม่า', 'ดนตรี'],
        dateAdded: '2024-07-24',
      },
    ],
  },
  {
    id: 'new_releases',
    title: 'ใหม่ล่าสุด',
    movies: [
      {
        id: '6',
        title: 'โอดิสซีย์ข้ามกาแล็กซี',
        description: 'ลูกเรือของยานอวกาศ "แวนเดอเรอร์" เริ่มต้นการเดินทางที่เต็มไปด้วยอันตรายสู่ขอบจักรวาลเพื่อค้นหาบ้านหลังใหม่สำหรับมนุษยชาติ',
        posterUrl: 'https://picsum.photos/id/101/500/750',
        backdropUrl: 'https://picsum.photos/id/111/1280/720',
        rating: 4.7,
        year: 2024,
        genres: ['ไซไฟ', 'ผจญภัย'],
        dateAdded: '2024-07-29',
        streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
          { name: 'Disney+ Hotstar', url: 'https://www.hotstar.com/th' },
        ],
      },
      {
        id: '7',
        title: 'รหัสลับสีเลือด',
        description: 'นักถอดรหัสอัจฉริยะต้องเข้าไปพัวพันกับการล่าสมบัติรอบโลกหลังจากถอดรหัสต้นฉบับโบราณได้สำเร็จ',
        posterUrl: 'https://picsum.photos/id/121/500/750',
        backdropUrl: 'https://picsum.photos/id/131/1280/720',
        rating: 4.3,
        year: 2024,
        genres: ['แอ็คชั่น', 'ลึกลับ'],
        dateAdded: '2024-07-23',
      },
      {
        id: '8',
        title: 'เสียงสะท้อนจากวันวาน',
        description: 'หญิงสาวคนหนึ่งค้นพบว่าเธอสามารถสื่อสารกับตัวเองในวัยเด็กผ่านวิทยุเก่า และพยายามป้องกันโศกนาฏกรรมของครอบครัว',
        posterUrl: 'https://picsum.photos/id/141/500/750',
        backdropUrl: 'https://picsum.photos/id/151/1280/720',
        rating: 4.9,
        year: 2024,
        genres: ['ดราม่า', 'แฟนตาซี', 'โรแมนติก'],
        dateAdded: '2024-07-22',
        streamingOn: [
          { name: 'HBO Go', url: 'https://www.hbogo.co.th/' },
        ],
      },
      {
        id: '9',
        title: 'สภาวะไร้แรงโน้มถ่วง',
        description: 'ระหว่างการเดินอวกาศตามปกติ นักบินอวกาศสองคนต้องติดอยู่นอกยานเมื่อกระสวยของพวกเขาถูกทำลาย โดยมีเพียงกันและกันเพื่อความอยู่รอด',
        posterUrl: 'https://picsum.photos/id/161/500/750',
        backdropUrl: 'https://picsum.photos/id/171/1280/720',
        rating: 4.5,
        year: 2024,
        genres: ['ไซไฟ', 'ระทึกขวัญ'],
        dateAdded: '2024-07-21',
      },
      {
        id: '10',
        title: 'ปริศนาแห่งเบเกอร์สตรีท',
        description: 'นักสืบคนใหม่ในลอนดอนต้องสานต่อตำนานของเชอร์ล็อก โฮล์มส์ เมื่อเกิดอาชญากรรมที่ดูเหมือนเป็นไปไม่ได้จนทำให้สกอตแลนด์ยาร์ดต้องงุนงง',
        posterUrl: 'https://picsum.photos/id/181/500/750',
        backdropUrl: 'https://picsum.photos/id/191/1280/720',
        rating: 4.1,
        year: 2024,
        genres: ['ลึกลับ', 'อาชญากรรม'],
        dateAdded: '2024-07-20',
        streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
        ],
      },
    ],
  },
  {
    id: 'thai_movies',
    title: 'หนังไทยน่าดู',
    movies: [
      {
        id: '11',
        title: 'ตำนานสมเด็จพระนเรศวร',
        description: 'อภิมหาภาพยนตร์อิงประวัติศาสตร์ของไทยที่ยิ่งใหญ่ที่สุด บอกเล่าเรื่องราวการกอบกู้เอกราชของสมเด็จพระนเรศวรมหาราช',
        posterUrl: 'https://picsum.photos/id/201/500/750',
        backdropUrl: 'https://picsum.photos/id/211/1280/720',
        rating: 4.9,
        year: 2007,
        genres: ['ประวัติศาสตร์', 'สงคราม', 'แอ็คชั่น'],
        dateAdded: '2024-07-19',
        streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
        ],
      },
      {
        id: '12',
        title: 'ฉลาดเกมส์โกง',
        description: 'เรื่องราวของกลุ่มนักเรียนอัจฉริยะที่คิดแผนการโกงข้อสอบระดับโลก เพื่อแลกกับเงินล้าน',
        posterUrl: 'https://picsum.photos/id/221/500/750',
        backdropUrl: 'https://picsum.photos/id/231/1280/720',
        rating: 4.8,
        year: 2017,
        genres: ['ระทึกขวัญ', 'อาชญากรรม', 'ดราม่า'],
        dateAdded: '2024-07-18',
         streamingOn: [
          { name: 'Netflix', url: 'https://www.netflix.com/' },
        ],
      }
    ]
  }
];
