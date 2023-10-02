import { cn } from '@/lib/utils.ts';
import { TbAlertHexagon } from 'react-icons/tb';
import { Button } from '@/components/ui/button.tsx';
import bannerImg from '@/assets/pexels-sora-shimazaki-5938440 1.png'
import { Container } from '@/components/Container';

export const Banner = () => {
    return (
        <div className={cn('bg-zinc-100')}>
            <Container className={cn('grid grid-cols-2 items-center gap-8 min-h-[48rem] ')}>
                <div className={cn('flex flex-col items-start gap-4')}>
                    <h4 className={cn('flex items-center gap-2 text-emerald-600')}>
                        <TbAlertHexagon size={16}/>
                        <p className={cn('font-[600]')}>
                            Welcome to Beautyness!!!
                        </p>
                    </h4>
                    <h2 className={cn('text-8xl font-serif text-zinc-900')}>
                        Beauty <wbr/>is power <br/>a smile <wbr/>is its <br/>sword.
                    </h2>
                    <h3 className={cn('text-2xl text-emerald-600')}>
                        There are many variation of passages are Ipsum available, <wbr/>majority have suffered
                        alteration in some form.
                    </h3>
                    <Button className={cn('uppercase bg-emerald-600 text-zinc-100 rounded-none')}>
                        Make a reservation
                    </Button>
                </div>
                <div>
                    <img src={bannerImg} alt='Beauty'/>
                </div>
            </Container>
        </div>
    )
}
