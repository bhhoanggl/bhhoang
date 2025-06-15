import { Service } from './types';

export const services: Service[] = [
    {
        id: 1,
        slug: 'web-design',
        title: 'Thiết kế Website',
        description: 'Thiết kế website chuyên nghiệp, responsive và tối ưu trải nghiệm người dùng',
        icon: '🎨',
        color: 'blue',
        heroImage: '/images/services/web-design/hero.jpg',
        bgPattern: '/images/services/web-design/pattern.svg',
        features: [
            {
                title: 'Thiết kế Responsive',
                description: 'Website hoạt động mượt mà trên mọi thiết bị',
                icon: '📱',
                image: '/images/services/web-design/responsive.jpg'
            },
            {
                title: 'UI/UX Hiện đại',
                description: 'Giao diện đẹp mắt, thân thiện với người dùng',
                icon: '🎨',
                image: '/images/services/web-design/ui-ux.jpg'
            }
        ],
        benefits: [
            {
                title: 'Tăng Tương tác',
                description: 'Cải thiện trải nghiệm người dùng và tỷ lệ chuyển đổi',
                icon: '📈',
                image: '/images/services/web-design/engagement.jpg'
            },
            {
                title: 'Thương hiệu Chuyên nghiệp',
                description: 'Tạo ấn tượng tốt với khách hàng',
                icon: '✨',
                image: '/images/services/web-design/branding.jpg'
            }
        ]
    },
    {
        id: 2,
        slug: 'app-development',
        title: 'Phát triển Ứng dụng',
        description: 'Phát triển ứng dụng web và mobile với công nghệ hiện đại',
        icon: '💻',
        color: 'purple',
        heroImage: '/images/services/app-development/hero.jpg',
        bgPattern: '/images/services/app-development/pattern.svg',
        features: [
            {
                title: 'Đa nền tảng',
                description: 'Hoạt động trên cả Web, iOS và Android',
                icon: '🌐',
                image: '/images/services/app-development/cross-platform.jpg'
            },
            {
                title: 'Hiệu năng Cao',
                description: 'Tối ưu tốc độ và trải nghiệm người dùng',
                icon: '⚡',
                image: '/images/services/app-development/performance.jpg'
            }
        ],
        benefits: [
            {
                title: 'Tiết kiệm Chi phí',
                description: 'Giải pháp hiệu quả về mặt chi phí',
                icon: '💰',
                image: '/images/services/app-development/cost-effective.jpg'
            },
            {
                title: 'Dễ dàng Mở rộng',
                description: 'Khả năng mở rộng linh hoạt',
                icon: '🚀',
                image: '/images/services/app-development/scalable.jpg'
            }
        ]
    },
    {
        id: 3,
        slug: 'seo',
        title: 'Tối ưu SEO',
        description: 'Tối ưu website để đạt thứ hạng cao trên các công cụ tìm kiếm',
        icon: '📈',
        color: 'green',
        heroImage: '/images/services/seo/hero.jpg',
        bgPattern: '/images/services/seo/pattern.svg',
        features: [
            {
                title: 'Phân tích Từ khóa',
                description: 'Nghiên cứu và lựa chọn từ khóa tiềm năng',
                icon: '🔍',
                image: '/images/services/seo/keyword-research.jpg'
            },
            {
                title: 'Tối ưu On-page',
                description: 'Tối ưu cấu trúc và nội dung website',
                icon: '📝',
                image: '/images/services/seo/on-page.jpg'
            }
        ],
        benefits: [
            {
                title: 'Tăng Thứ hạng',
                description: 'Cải thiện vị trí trên Google',
                icon: '🏆',
                image: '/images/services/seo/ranking.jpg'
            },
            {
                title: 'Tăng Truy cập',
                description: 'Thu hút nhiều khách hàng tiềm năng',
                icon: '📊',
                image: '/images/services/seo/traffic.jpg'
            }
        ]
    },
    {
        id: 4,
        slug: 'maintenance',
        title: 'Bảo trì & Hỗ trợ',
        description: 'Dịch vụ bảo trì website và hỗ trợ kỹ thuật 24/7',
        icon: '🛠️',
        color: 'orange',
        heroImage: '/images/services/maintenance/hero.jpg',
        bgPattern: '/images/services/maintenance/pattern.svg',
        features: [
            {
                title: 'Bảo trì Định kỳ',
                description: 'Kiểm tra và bảo dưỡng thường xuyên',
                icon: '🔧',
                image: '/images/services/maintenance/regular-maintenance.jpg'
            },
            {
                title: 'Hỗ trợ 24/7',
                description: 'Đội ngũ kỹ thuật luôn sẵn sàng',
                icon: '📞',
                image: '/images/services/maintenance/support.jpg'
            }
        ],
        benefits: [
            {
                title: 'Hoạt động Ổn định',
                description: 'Website luôn trong trạng thái tốt nhất',
                icon: '✅',
                image: '/images/services/maintenance/stability.jpg'
            },
            {
                title: 'An toàn Dữ liệu',
                description: 'Sao lưu và bảo mật thông tin',
                icon: '🔒',
                image: '/images/services/maintenance/security.jpg'
            }
        ]
    }
]; 