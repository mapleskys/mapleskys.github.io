// 照片数据
const photos = [
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第一张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第二张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第三张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第四张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第五张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第六张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第七张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第八张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第九张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第十张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第十一张照片的描述'
    },
    {
        url: 'https://picsum.photos/200/300',
        description: '这是第十二张照片的描述'
    },

];

// 初始化照片墙
function initPhotoWall() {
    const container = document.querySelector('.photo-container');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // 计算需要多少张照片才能填满屏幕（考虑两倍宽度实现无缝循环）
    const photosPerRow = 4; // 每行显示4张
    const photosPerColumn = 3; // 每列显示3张
    const totalNeeded = photosPerRow * photosPerColumn * 2; // 乘2是为了实现无缝效果
    
    // 创建足够的照片来填满容器
    for (let i = 0; i < totalNeeded; i++) {
        const photoIndex = i % photos.length; // 循环使用照片数据
        const photo = photos[photoIndex];
        
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.description;
        img.loading = 'lazy';
        
        photoItem.appendChild(img);
        container.appendChild(photoItem);
        
        photoItem.addEventListener('click', () => showModal(photo));
    }

    // 设置容器宽度为屏幕宽度的两倍（为了无缝循环）
    container.style.width = `${screenWidth * 2}px`;
}

// 添加窗口大小改变时的处理
window.addEventListener('resize', () => {
    const container = document.querySelector('.photo-container');
    container.innerHTML = ''; // 清空现有内容
    initPhotoWall(); // 重新初始化
});

// 显示模态框
function showModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const modalDesc = document.getElementById('modalDescription');

    modalImg.src = photo.url;
    modalDesc.textContent = photo.description;
    modal.style.display = 'block';
}

// 关闭模态框
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('photoModal').style.display = 'none';
});

// 点击模态框外部关闭
window.addEventListener('click', (event) => {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 初始化
initPhotoWall(); 