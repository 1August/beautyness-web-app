import { Banner } from '@/components/Banner/Banner.tsx';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import aboutUsImg from '@/assets/Photo-13.png'
import service1 from '@/assets/Photo-11.png'
import service2 from '@/assets/Photo-12.png'
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';
import { pros, services, shortServices } from '@/data/Home/data.ts';
import { Separator } from '@/components/ui/separator.tsx';

export const Home = () => {
    return (
        <main>
            <Section>
                <Banner/>
            </Section>
            <Section>
                <Container className={cn('grid grid-cols-3 gap-8')}>
                    {
                        shortServices.map(service => (
                            <Card className={cn('border-none')} key={service.title}>
                                <CardHeader>
                                    <img src={service.src} alt={service.alt}/>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription className={cn('mt-4')}>{service.content}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant={'outline'} className={cn('rounded-none uppercase')}>
                                        <Link to={service.to}>{service.buttonContent}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </Container>
            </Section>
            <Section>
                <Container className={cn('grid grid-cols-2 gap-8 items-center')}>
                    <div className={cn('grid gap-4')}>
                        <h4 className={cn('uppercase text-emerald-600 font-[600]')}>About us</h4>
                        <h2 className={cn('text-6xl font-serif')}>
                            The Beauty is about being Comfortable in your own skin!
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, buying to injected humour, or randomised words which don't
                            look even many desktop publishing packages.
                        </p>
                        <div className={cn('grid grid-cols-3 gap-4 mt-8')}>
                            {
                                pros.map(pro => (
                                    <Card className={cn('rounded-none')} key={pro.content}>
                                        <CardHeader>
                                            <img className={cn('h-16 object-contain')} src={pro.src} alt={pro.alt}/>
                                        </CardHeader>
                                        <CardContent>
                                            <h5 className={cn('text-xl font-bold font-serif text-center')}>
                                                {pro.content}
                                            </h5>
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <Card className={cn('border-none')}>
                            <CardHeader>
                                <img className={cn('shadow-[3rem_-3rem_0] shadow-emerald-600')} src={aboutUsImg}
                                     alt='Beauty mask'/>
                            </CardHeader>
                        </Card>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h4 className={cn('text-center font-[600] text-emerald-600')}>Our services</h4>
                    <h2 className={cn('text-6xl font-serif text-center mt-4')}>
                        We are Experienced in making <wbr/>you very Beautiful
                    </h2>
                    <div className={cn('grid grid-cols-2 grid-rows-2 justify-between mt-8')}>
                        <div>
                            <Card className={cn('border-none')}>
                                <CardHeader className={cn('p-0')}>
                                    <img src={service1} alt='Service 1'/>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className={cn('grid')}>
                            {
                                services.filter((_, i) => i <= 4).map(service => (
                                    <>
                                        <Card className={cn('border-none')}>
                                            <CardHeader
                                                className={cn('grid grid-cols-[auto_1fr_auto] items-center pr-0' +
                                                    ' pb-0')}>
                                                <h4 className={cn('text-xl')}>{service.title}</h4>
                                                <p></p>
                                                <p className={cn('text-xl')}>{service.currency} {service.cost}</p>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>
                                                    {service.content}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Separator/>
                                    </>
                                ))
                            }
                        </div>
                        <div className={cn('grid')}>
                            {
                                services.filter((_, i) => i <= 4).map(service => (
                                    <>
                                        <Card className={cn('border-none')}>
                                            <CardHeader
                                                className={cn('grid grid-cols-[auto_1fr_auto] items-center pl-0' +
                                                    ' pb-0')}>
                                                <h4 className={cn('text-xl')}>{service.title}</h4>
                                                <p></p>
                                                <p className={cn('text-xl')}>{service.currency} {service.cost}</p>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription>
                                                    {service.content}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Separator/>
                                    </>
                                ))
                            }
                        </div>
                        <div>
                            <Card className={cn('border-none')}>
                                <CardHeader className={cn('p-0')}>
                                    <img src={service2} alt='Service 2'/>
                                </CardHeader>
                            </Card>
                        </div>

                    </div>
                </Container>
            </Section>
        </main>
    )
}
