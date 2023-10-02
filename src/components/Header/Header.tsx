import { Section } from '@/components/Section';
import { BiArrowFromTop, BiDownArrow, BiLogoLinkedin } from 'react-icons/bi';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import { FiArrowDown, FiFacebook, FiTwitter } from 'react-icons/fi';
import { cn } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu.tsx';
import { ArrowDown, ArrowDownUp } from 'lucide-react';

// const headerLinks: LinkProps[] = [
//     {
//         children: 'Home',
//         to: '/',
//     },
//     {
//         children: 'Pages',
//         to: '/pages',
//     },
//     {
//         children: 'About',
//         to: '/about',
//     },
//     {
//         children: 'Services',
//         to: '/services',
//     },
//     {
//         children: 'Contact',
//         to: '/contact',
//     },
// ]
const headerLinks = [
    { to: '/', children: 'Home' },
    { to: '/education', children: 'Education' },
    { to: '/map', children: 'Map Zoo' },
    { to: '/events', children: 'Events' },
    { to: '/donate', children: 'Donate' },
    { to: '/foundation', children: 'Foundation' },
]
const socials: LinkProps[] = [
    {
        to: '/twitter',
        children: <FiTwitter size={16}/>,
    },
    {
        to: '/facebook',
        children: <FiFacebook size={16}/>,
    },
    {
        to: '/linkedin',
        children: <BiLogoLinkedin size={16}/>,
    },
]
export const Header = () => {
    return (
        <header className={cn('bg-white')}>
            <Section>
                {/*<Container className={cn('')}>*/}
                <div className={cn('flex justify-between items-center gap-8 bg-emerald-800 py-2 px-8')}>
                    <div>
                        <p>
                            Phone: <Link to='tel:+77777777777'>+7 (777) 777 77 77</Link>
                        </p>
                    </div>
                    <div>
                        <ul className={cn('list-none m-0 p-0 flex items-center gap-8')}>
                            {
                                socials.map(social => (
                                    <li>
                                        <Link to={`/${social.to}`} target={'_blank'}>{social.children}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className={cn('list-none m-0 p-0 flex items-center gap-8')}>
                            {
                                headerLinks.map(link => (
                                    <li>
                                        <NavLink
                                            to={`${link.to}`}
                                            className={({ isActive }) => {
                                                if (isActive) return cn('text-gray-300')
                                            }}>
                                            {link.children}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={cn('flex justify-between items-center gap-8 bg-emerald-600 py-8 px-8')}>
                        <div>
                            <h1 className={cn('font-serif text-4xl')}>
                                SupaBrand
                            </h1>
                        </div>
                        <div className={cn('flex justify-end items-center gap-8')}>
                            <div>
                                <ul className={cn('list-none m-0 p-0 flex items-center gap-8')}>
                                    {headerLinks.map(link => (
                                        <li>
                                            <DropdownMenu >
                                                <DropdownMenuTrigger className={cn('outline-none')}>
                                                    <span
                                                        className={cn('text-lg font-medium hover:text-gray-300 flex' +
                                                            ' items-center gap-2')}
                                                        // className={({ isActive }) => {
                                                        //     const classes = ['text-lg', 'font-medium', 'hover:text-gray-300']
                                                        //     if (isActive) classes.push('text-gray-300')
                                                        //     return cn(classes)
                                                        // }}
                                                    >
                                                        {link.children} <ArrowDown/>
                                                    </span>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className={cn('grid grid-cols-3 gap-x-8 gap-y-6' +
                                                    ' p-8')}>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                    <Link to={'/lorem'} className={cn('min-w-[8rem]')}>Lorem</Link>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <Button
                                    className={cn('text-white hover:text-black bg-emerald-800 rounded-none px-8 py-6')}>
                                    Click me
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</Container>*/}
            </Section>
        </header>
    )
}


/*

// <header className={cn('py-6 border-b-2')}>
        //     <Section>
        //         <Container isWide={true} className={cn('flex items-center justify-between gap-8')}>
        //             <div className={cn('brand flex items-center gap-12')}>
        //                 <h1 className={cn('text-3xl text-zinc-200 font-serif font-bold')}>Beautyness</h1>
        //                 <p className={cn('flex items-center gap-2')}><BiPhoneCall size={16}/> Call Us - <a
        //                     href='tel:+221234567890'>(+22) 123 456 7890</a></p>
        //             </div>
        //             <div className={cn('flex items-center justify-end gap-12')}>
        //                 <div className={cn('list-none m-0 p-0 flex items-center justify-end gap-4')}>
        //                     {
        //                         headerLinks.map(link => (
        //
        //                             <NavLink to={link.to}>{link.children}</NavLink>
        //                         ))
        //                     }
        //                 </div>
        //                 <div className={cn('flex items-center justify-end gap-4')}>
        //                     {socials.map(social => (
        //                         <Link to={social.to}>{social.children}</Link>
        //                     ))}
        //                 </div>
        //                 <Button className={cn('flex items-center gap-4 rounded-none')}>
        //                     <BsCalendar4 size={16}/> Reservation
        //                 </Button>
        //             </div>
        //         </Container>
        //     </Section>
        // </header>
 */
