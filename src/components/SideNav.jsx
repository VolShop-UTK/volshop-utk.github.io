import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const SidebarItem = ({ item, onLinkClick }) => {
    const isMobile = () => window.innerWidth <= 768;

    const handleClick = () => {
        if (onLinkClick && isMobile()) {
            onLinkClick();
        }
    };
    const hasChildren = item.children && item.children.length > 0;
    const location = useLocation();

    return (
        <li>
            {hasChildren ? (
                <>
                    {item.label}
                    <ul>
                        {item.children.map((child, idx) => (
                            <li key={idx}>
                                {child.href ? (
                                    <ul>
                                        <SidebarItem
                                            key={idx}
                                            item={child}
                                            onLinkClick={onLinkClick}
                                        />
                                    </ul>
                                ) : (
                                    child.label
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : item.href ? (
                <Link
                    to={item.href}
                    onClick={handleClick}
                    className={`sidebar-link ${location.pathname === item.href ? 'active' : ''}`}>
                    {item.label}
                </Link>
            ) : (
                item.label
            )}
        </li>
    );
};

const SideNav = ({ isOpen, items = [], onLinkClick }) => {
    useEffect(() => {
        if (isOpen && window.innerWidth <= 768) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    return (
        <aside className={`sidenav ${isOpen ? 'open' : ''}`}>
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} onLinkClick={onLinkClick} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;
